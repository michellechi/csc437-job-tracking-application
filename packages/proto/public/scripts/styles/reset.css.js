import { css } from "@calpoly/mustang";

const styles = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
        
    body {
        background-color: var(--color-background);
        color: var(--color-text);
        font-family: Afacad Flux, Manrope, sans-serif;
        margin: 0;
        padding: 0;
        font-size: var(--font-size-base);
    }

    header {
        background-color: var(--color-header-bg);
        color: var(--color-header-text);
        padding: 15px;
        font-size: var(--font-size-header);
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    header h1 {
        margin: 0;
        text-align: center;
        flex-grow: 1;
        vertical-align: middle;
    }

    header .profile-icon {
        position: absolute;
        right: 20px;
        display: flex;
        width: 70px;
        height: 70px;
        vertical-align: middle;
        fill: var(--color-header-text); 
    }

    h2 .icon-header2{
        width: 40px;
        height: 40px;
        vertical-align: middle;
    }

    /* Reused styles */
    a {
        color: var(--color-link);
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    .container {
        padding: var(--spacing-medium);
        max-width: 1200px;
        margin: 0 auto;
        font-size: var(--font-size-base);
    }

    .list-container {
        border: 1px solid var(--color-accent-border);
        background-color: var(--color-list-background);
        padding: var(--spacing-medium);
        margin-bottom: var(--spacing-large);
    }

    h2 {
        font-size: var(--font-size-large);
        color: var(--color-heading2);
    }

    button {
        background-color: var(--color-highlight);
        color: var(--color-text-header);
        padding: var(--spacing-small);
        cursor: pointer;
        font-family: Afacad Flux, Arial, sans-serif;
        font-size: var(--font-size-tiny);
    }

    button:hover {
        background-color: #392619; /* Slightly lighter orange on hover */
        color: var(--color-header-text);
    }

    .container {
        padding: 20px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1); 
        margin-bottom: 20px;
    }
    `;

export default { styles };