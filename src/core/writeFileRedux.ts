import path from 'path';
import fs from 'fs-extra';
import { CLIOptions } from 'types/CLIOptions';
import { Config } from 'types/Config';

async function writeFileRedux(cliOption: CLIOptions, folderComponent: string, config: Config) {
  const dotFile = config.typescript ? 'ts' : 'js';
  const actionFile = path.resolve(folderComponent, 'actions', `actions.${dotFile}`);
  const reducerFile = path.resolve(folderComponent, 'reducers', `reducers.${dotFile}`);
  const sagaFile = path.resolve(folderComponent, 'sagas', `sagas.${dotFile}`);
  const thunkFile = path.resolve(folderComponent, 'thunks', `thunks.${dotFile}`);
  try {
    if (cliOption.redux === 'saga') {
      await Promise.all([
        fs.outputFile(actionFile, config.templates.actions),
        fs.outputFile(reducerFile, config.templates.reducers),
        fs.outputFile(sagaFile, config.templates.sagas),
      ]);
    }
    if (cliOption.redux === 'thunk') {
      await Promise.all([
        fs.outputFile(actionFile, config.templates.actions),
        fs.outputFile(reducerFile, config.templates.reducers),
        fs.outputFile(thunkFile, config.templates.thunks),
      ]);
    }
  } catch (err) {
    console.log(err);
  }
}

export default writeFileRedux;
