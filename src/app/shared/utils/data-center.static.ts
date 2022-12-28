export abstract class DataCenter {
  private static dataCenter: Map<string, Map<string, any>>;
  private static readonlyKeys: Map<string, string[]>; 
  
  public static set(screenId: string, key: string, value: any, readonly?: boolean) {
    if (this.dataCenter === undefined) {
        this.dataCenter = new Map();
        this.readonlyKeys = new Map();
    }
    if (this.dataCenter.has(screenId) === false) {
        this.dataCenter.set(screenId, new Map());
        this.readonlyKeys.set(screenId, []);
    }
    const screenData = this.dataCenter.get(screenId);
      screenData.set(key, value);
      if (readonly) {
        const screenReadonlyKeys = this.readonlyKeys.get(screenId);
        screenReadonlyKeys.push(key);
      }
}

public static get(screenId: string, key: string, clear?: boolean): any {
    const screenData = this.dataCenter.get(screenId);
    const data = screenData.get(key);
    if (clear !== false) {
        this.clear(screenId, key);
    }
    return data;
}

public static clear(screenId: string, key?: string): void {
    const delResult = this.dataCenter.delete(screenId);
    console.log('Data center clear', screenId, delResult ? 'has been clear.' : 'is already empty!!');
}
}