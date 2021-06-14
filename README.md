# nextune-client

This is the user client for the Nextune application.

### Development requirements:
- The latest version of expo installed
    - Get the app on your phone
    - On your desktop:
        - `npm install -g yarn`
        - `npm install -g expo-cli`
- Node and NPM working
- A good editor [VSCode recommended](https://code.visualstudio.com/download)

### Installing:
Run the following commands to obtain a local development version of the application:
- `git clone https://github.com/nextune/client`
- `cd "Nextune client"`
- `npm install`
- `expo start`

### Policy for making changes and pushing to main:
Follow the following guidelines for making changes and pushing code.
- To request a change, make an issue first. Then assign yourself to that issue. This makes it easier to keep track of what is being worked on and by whom.
- **Do not** push large files (such as design sketches) to github. Edit this readme or create separate documentation to link to a google drive folder.
- Only push code to your branch. Make sure that your branch is up to date with main before pushing.
    - Create your branch:
        - `git checkout -b "Branch name"`
    - Update your branch (if changes were made to main while working on your branch):
        - `git fetch`
        - `git rebase origin/main`
    - Commit and push your changes
        - `git add .`
        - `git commit -m "Message here"`
        - `git push`
    - Make a pull request on github. Make sure to tag the relevant issue(s). Once a pull request has been merged make sure to delete your branch on remote.
    
### While making changes make sure to follow the following style guidelines:
- TBD