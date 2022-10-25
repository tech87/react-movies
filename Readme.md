# Git workflow

1. Clone the repo:

```sh
git clone https://github.com/tricinel/react-movies.git
```

2. Make changes locally

3. Add all your changes. This adds all your changed files.

```sh
git add -A
```

Or you can pick and choose files with:

```sh
git add src/some/file/name.jsx
```

and that adds only that file to the staging area.

4. Commit your changes. With your files added as above, you can now commit this change.

```sh
git commit -m "Write a good commit message here"
```

5. Push your changes. This will sync the changes from your local to Github.

```sh
git push
```

6. Pulling changes. This will sync the changes from Github to your local.

```sh
git pull
```

All `git` commands must be run from the local directory where you cloned the repo.

## Install

Run `npm install` in the repo directory.

### Run the app locally

The app needs to run both `vite` and `json-server` locally. The way to do this is by running the following command:

```sh
npm run start
```

This will actually run `npm run dev` and `npm run api` in parallel.

The app is then accessible at `http://127.0.0.1:5173/` - please wathc the port number as that may change when `vite` runs.
