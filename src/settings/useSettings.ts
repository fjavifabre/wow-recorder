import * as React from 'react';

export const getConfigValue = <T>(configKey: string): T => {
  return window.electron.ipcRenderer.sendSync('config', [
    'get',
    configKey,
  ]) as T;
};

export const setConfigValue = (configKey: string, value: any): void => {
  window.electron.ipcRenderer.sendMessage('config', ['set', configKey, value]);
};

export const setConfigValues = (dict: { [key: string]: any }): void => {
  window.electron.ipcRenderer.sendMessage('config', ['set_values', dict]);
};

export const useSettings = () => {
  const configValues = {
    storagePath: getConfigValue<string>('storagePath'),
    bufferStoragePath: getConfigValue<string>('bufferStoragePath'),
    retailLogPath: getConfigValue<string>('retailLogPath'),
    classicLogPath: getConfigValue<string>('classicLogPath'),
    maxStorage: getConfigValue<number>('maxStorage'),
    minEncounterDuration: getConfigValue<number>('minEncounterDuration'),
    monitorIndex: getConfigValue<number>('monitorIndex'),
    audioInputDevices: getConfigValue<string>('audioInputDevices'),
    audioOutputDevices: getConfigValue<string>('audioOutputDevices'),
    startUp: getConfigValue<boolean>('startUp'),
    startMinimized: getConfigValue<boolean>('startMinimized'),
    recordRetail: getConfigValue<boolean>('recordRetail'),
    recordClassic: getConfigValue<boolean>('recordClassic'),
    recordRaids: getConfigValue<boolean>('recordRaids'),
    recordDungeons: getConfigValue<boolean>('recordDungeons'),
    recordTwoVTwo: getConfigValue<boolean>('recordTwoVTwo'),
    recordThreeVThree: getConfigValue<boolean>('recordThreeVThree'),
    recordFiveVFive: getConfigValue<boolean>('recordFiveVFive'),
    recordSkirmish: getConfigValue<boolean>('recordSkirmish'),
    recordSoloShuffle: getConfigValue<boolean>('recordSoloShuffle'),
    recordBattlegrounds: getConfigValue<boolean>('recordBattlegrounds'),
    obsOutputResolution: getConfigValue<string>('obsOutputResolution'),
    obsFPS: getConfigValue<number>('obsFPS'),
    obsForceMono: getConfigValue<boolean>('obsForceMono'),
    obsKBitRate: getConfigValue<number>('obsKBitRate'),
    obsCaptureMode: getConfigValue<string>('obsCaptureMode'),
    obsRecEncoder: getConfigValue<string>('obsRecEncoder'),
    minKeystoneLevel: getConfigValue<number>('minKeystoneLevel'),
    minimizeOnQuit: getConfigValue<boolean>('minimizeOnQuit'),
    minimizeToTray: getConfigValue<boolean>('minimizeToTray'),
    minRaidDifficulty: getConfigValue<string>('minRaidDifficulty'),
    chatOverlayEnabled: getConfigValue<boolean>('chatOverlayEnabled'),
    chatOverlayWidth: getConfigValue<number>('chatOverlayWidth'),
    chatOverlayHeight: getConfigValue<number>('chatOverlayHeight'),
    chatOverlayXPosition: getConfigValue<number>('chatOverlayXPosition'),
    chatOverlayYPosition: getConfigValue<number>('chatOverlayYPosition'),
    captureCursor: getConfigValue<boolean>('captureCursor'),
    speakerVolume: getConfigValue<number>('speakerVolume'),
    micVolume: getConfigValue<number>('micVolume'),
  };

  return React.useState(configValues);
};
