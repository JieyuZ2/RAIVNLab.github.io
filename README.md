# RAIVNLab.github.io

## Adding People

Follow the style outlined [here](https://github.com/RAIVNLab/RAIVNLab.github.io/blob/main/src/pages/people.tsx#L109-L115) for adding a new person. Images should be square profile pictures and stored in the [`static/`](https://github.com/RAIVNLab/RAIVNLab.github.io/tree/main/static) directory.

## Updating Papers

If you want to add a publication, update the [publications.json](https://github.com/RAIVNLab/RAIVNLab.github.io/blob/main/src/components/publications.json) file. If you want to add a thumbnail, make sure you've placed it in the [`static/`](https://github.com/RAIVNLab/RAIVNLab.github.io/tree/main/static) directory.

## Local Development

This repository is built using React and Gatsby JS. I've only tested on a Ubuntu machine. It requires node >= 19.0 (so run nvm use 19). If you don't have it installed, you'll also need to run `nvm install 19`).

```bash
git clone https://github.com/RAIVNLab/RAIVNLab.github.io.git
cd RAIVNLab.github.io.git
nvm use 19
yarn install
yarn run develop
```

GPT-N is pretty good at debugging setup issues - I'd recommend using it :)

