import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

const validate =
  (schema: Schema) =>
  (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      return res.status(400).json({
        status: "fail",
        message: error.details.map((d) => d.message).join(", "),
      });
    }

    next();
  };

export default validate;
