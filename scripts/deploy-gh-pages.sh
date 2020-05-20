#!/bin/bash

GH_USER="mani-mani-mani"
GH_EMAIL="<>"
GH_MESSAGE="chore: update github-page"
GH_BRANCH="gh-pages"

BUILD_DIRECTORY="build/"
DEPLOY_DIRECTORY="gh-page-tmp-directory/"

# set up
set -ex
git config --local user.name ${GH_USER}
git config --local user.email ${GH_EMAIL}
git remote rm origin
git remote add origin https://${GITHUB_ACTOR}:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git
git fetch --no-recurse-submodules

# files to commit
git worktree add ${DEPLOY_DIRECTORY} origin/${GH_BRANCH}
rsync -av --delete ${BUILD_DIRECTORY} ${DEPLOY_DIRECTORY} \
    --exclude .git \
    --exclude .github

# commit & push
pushd ${DEPLOY_DIRECTORY}
git add --all .
git commit -m "${GH_MESSAGE}"
git push origin ${GH_BRANCH}
popd

# post push
git worktree remove ${DEPLOY_DIRECTORY}
