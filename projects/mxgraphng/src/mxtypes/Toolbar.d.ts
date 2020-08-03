declare class mxToolbar {
  constructor(node: any);

  enabled: boolean;
  noReset: boolean;
  updateDefaultMode: boolean;

  addItem(title, icon, funct, pressedIcon, style, factoryMethod);
  addCombo(style);
  addActionCombo(title, style);
  addOption(combo, title, value);
  addSwitchMode(title, icon, funct, pressedIcon, style);
  addMode(title, icon, funct, pressedIcon, style, toggle);
  selectMode(domNode, funct);
  resetMode(forced);
  addSeparator(icon);
  addBreak();
  addLine();
  destroy();
}
