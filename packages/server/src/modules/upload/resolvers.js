/*eslint-disable no-unused-vars*/
import shell from 'shelljs';
import fs from 'fs';
import path from 'path';

import FieldError from '../../../../common/FieldError';

export default pubsub => ({
  Query: {
    files(obj, args, { Upload }) {
      return Upload.files();
    }
  },
  Mutation: {
    uploadFiles: async (obj, { files }, { Upload }) => {
      files.map(file => {
        const filePath = `${file.path}`;
        const fileName = filePath + `${file.name}`;
        fs.rename(filePath, fileName, err => {
          if (err) throw new Error('Unable to rename');
        });
        file.path = fileName;
        return file;
      });
      return await Upload.saveFiles(files);
    },
    removeFile: async (obj, { id }, { Upload }) => {
      const file = await Upload.file(id);
      if (!file) {
        throw new Error('File not found.');
      }

      const ok = await Upload.deleteFile(id);
      if (ok) {
        const res = shell.rm(file.path);
        if (res.code > 0) {
          throw new Error('Unable to delete file.');
        }
      }
      return ok;
    }
  },
  Subscription: {}
});
