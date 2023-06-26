//Basic response
export type BasicResponse = {
    message: string    
}

export type BasicDateResponse = {
    message: string,
    Date: Date;
}

export type ErrorResponse = {
    error: string,
    message: string
}
