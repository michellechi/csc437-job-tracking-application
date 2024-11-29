// src/services/credential-svc.ts
import bcrypt from "bcryptjs";
import { Schema, model } from "mongoose";
import { Credential } from "../models/credential";

const credentialSchema = new Schema<Credential>(
    {
        username: {
            type: String,
            required: true,
            trim: true
        },
        hashedPassword: {
            type: String,
            required: true
        }
    },
    { collection: "user_credentials" }
);

const credentialModel = model<Credential>(
    "Credential",
    credentialSchema
);

// curl -X POST http://localhost:3000/auth/register \
// -H "Content-Type: application/json" \
// -d '{"username": "test", "password": "password"}'
function create(username: string, password: string){
    return new Promise<Credential>((resolve, reject) => {
        console.log("function create");
        if(!username || !password){
            reject("Must provide username and password");
        }
        credentialModel
            .find({username})
            .then((found: Credential[]) => {
                if(found.length) reject("username exists")
            })
            .then(() =>
                bcrypt
                    .genSalt(10)
                    .then((salt: string) => bcrypt.hash(password, salt))
                    .then((hashedPassword: string) => {
                        const creds = new credentialModel({
                            username,
                            hashedPassword
                        });
                        creds.save().then((created: Credential) => {
                            if (created) resolve(created);
                        });
                    })
            );
    });
}

// curl -X POST http://localhost:3000/auth/login \
// -H "Content-Type: application/json" \
// -d '{"username": "test", "password": "password"}'
function verify(
    username: string,
    password: string
): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        credentialModel
            .find({ username })
            .then((found) => {
                if (found && found.length === 1) return found[0];
                else reject("Invalid username or password");
            })
            .then((credsOnFile) => {
                if (credsOnFile)
                    bcrypt.compare(
                        password,
                        credsOnFile.hashedPassword,
                        (_, result) => {
                            console.log(
                                "Verified",
                                result,
                                credsOnFile.username
                            );
                            if (result) resolve(credsOnFile.username);
                            else reject("Invalid username or password");
                        }
                    );
                else reject("Invalid username or password");
            });
    });
}

export default { create, verify };
