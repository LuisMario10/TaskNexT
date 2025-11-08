export type TTaskModel = {
    id: number;
    title: string;
    body: string;
    isComplete: boolean | undefined;
    completeDate: string | undefined;
}