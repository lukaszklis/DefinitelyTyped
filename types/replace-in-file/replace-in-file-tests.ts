import rif = require('replace-in-file');

const asyncOptions: ReplaceInFileOptions = {
    from: 'some/FILE.txt',
    to: match => match.toLowerCase()
};

rif(asyncOptions)
    .then(() => {})
    .catch(() => {});

const syncOptions: ReplaceInFileOptions = {
    from: 'some/file.txt',
    to: 'other/file.txt'
};
rif(syncOptions, (error, changes) => {});