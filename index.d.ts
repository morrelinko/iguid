export interface IGuid {
    (): string
    readonly state: number
    readonly prefix: string | (() => string) | undefined | null 
}

export function createIGuid(prefix?: string | (() => string)): IGuid
export const iguid: IGuid