import { RequestHandler } from "express"

export const createEdible:RequestHandler = (_req, res) => {
    res.send("Hello edibles")
}