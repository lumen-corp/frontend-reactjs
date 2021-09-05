# T-PROJECT - Frontend-react.js

## Problem statement

For individuals and organizations who need to stay on top of important projects and piles of tasks.

Our product is an application that allows you to create a simple to-do list and assign each task to who is to carry it out.

Unlike other prioritization tools, Our product is unique because it allows organizations to prioritize tasks and assign them to members of their team with a very simple and direct click. 

We’ll know this is true when individuals and organizationsns prefer to make use of our app rather than other tools

Open [T-PROJECT PRD](https://docs.google.com/document/d/1jOE3vxcxue-m6UlXKN-_vhd_-jpEyKlXLVf4n2aDVR4/edit) to see more.

## Folder Structure 
	.
	├── .github                  # Github issue and PR templates
	├── public                   # Contains index.html, robots.txt, manifest.json,etc    
	├── src                      # Source files (alternatively `lib` or `app`)
	│   ├── assets               # Media assets, such as images and videos, etc 
	│   ├── components           # Presentational/Stateless Components 
	│   ├── containers           # Contains all the Stateful Components
	│   ├── pages                # Route-level components
	│   ├── requests             # API calls or websocket interactions
	│   └── utils                # Snippets for use throughout the application.
	├── .gitignore              
	├── README.md              
	├── craco.config.js              
	├── package.json              
	├── tailwind.config.js
	├── tsconfig.json
	└── index.js


## Available Scripts

In the project directory, you can run:

### `yarn install`
installs all the dependencies defined in a package.json file.

### `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.