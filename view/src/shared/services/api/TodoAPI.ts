import axios, { AxiosInstance } from "axios"

const axiosInstance: AxiosInstance = axios.create();

const BASE_URL: string = "/api/todos";

interface ITask {
    id: number;
    title: string;
    body: string;
    isComplete: boolean;
    completeDate: string | null;
};


export const TodoAPI = {
    async getAll() {
        const response = await axiosInstance.get(BASE_URL);

        return response.data.todos;
    },

    async post(datas: Partial<ITask>) {
        const response = await axiosInstance
        .post(BASE_URL, 
            { 
                title: datas.title, 
                body: datas.body, 
                isComplete: datas.isComplete,
                completeDate: datas.completeDate 
            })

        return response.data.todos as ITask;
    },

    async updateByID(id: number, datas: Partial<ITask>) {
        await axiosInstance.put(BASE_URL + String(id), datas);

        return;
    },

    async deleteByID(id: number) {
        await axiosInstance.delete(BASE_URL + String(id));

        return;
    }
}