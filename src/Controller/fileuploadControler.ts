import { Request, Response } from "express";
import fileUpload, { fileUploadType } from "../Models/fileUpload";
const fs = require("fs");
const path = require("path");

export const Register = async (req: any, res: Response) => {
  try {
    const { appId } = req.body;

    if (req.files.length < 4) {
      throw new Error("Please Select Required Files");
    } else if (req.files.length == 4) {
      const DocumentsInTheDb = await fileUpload.create({
        appId,
        purchaseAgrement: req.files[0]?.filename,
        brokerOfRecord: req.files[1]?.filename,
        lmStatemntOrVoidCheck: req.files[2]?.filename,
        dLicence: req.files[3].filename,
      });

      if (DocumentsInTheDb) {
        res.json({
          message: " Documents Added Successfully  ",
          success: true,
        });
      } else {
        return res.status(400).json({
          error: "Property Not Added",
          success: false,
        });
      }
    } else if (req.files.length == 5) {
      const DocumentsInTheDb = await fileUpload.create({
        appId,
        purchaseAgrement: req.files[0]?.filename,
        brokerOfRecord: req.files[1]?.filename,
        lmStatemntOrVoidCheck: req.files[2]?.filename,
        dLicence: req.files[3].filename,
        pHistory: req.files[4].filename,
      });

      if (DocumentsInTheDb) {
        res.json({
          message: " Documents Added Successfully  ",
          success: true,
        });
      } else {
        return res.status(400).json({
          error: "Property Not Added",
          success: false,
        });
      }
    } else {
      const DocumentsInTheDb = await fileUpload.create({
        appId,
        purchaseAgrement: req.files[0]?.filename,
        brokerOfRecord: req.files[1]?.filename,
        lmStatemntOrVoidCheck: req.files[2]?.filename,
        dLicence: req.files[3].filename,
        pHistory: req.files[4].filename,
        another: req.files[5].filename,
      });
      console.log("DocumentsInTheDb", DocumentsInTheDb);
      if (DocumentsInTheDb) {
        res.json({
          message: " Documents Added Successfully  ",
          success: true,
        });
      } else {
        return res.status(400).json({
          error: "Property Not Added",
          success: false,
        });
      }
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false });
  }
};

export const Get = async (req: Request, res: Response) => {
  try {
    const { appId } = req.body;

    const DocumentsInDb = await fileUpload.find({ appId });

    if (DocumentsInDb == null || DocumentsInDb.length == 0 || !DocumentsInDb) {
      return res.status(400).json({
        error: "Documents not found ",
        success: false,
      });
    } else {
      res.json({
        message: "Documents fetched Successfully ",
        data: DocumentsInDb,
        success: true,
      });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false });
  }
};
