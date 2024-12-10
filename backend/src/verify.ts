import {
  verifyCloudProof,
  IVerifyResponse,
  ISuccessResult,
} from "@worldcoin/minikit-js";
import { RequestHandler } from "express";

interface IRequestPayload {
  payload: ISuccessResult;
  action: string;
  signal: string | undefined;
}

export const verifyHandler: RequestHandler = async (req, res) => {
  const { payload, action, signal } = req.body as IRequestPayload;
  const app_id = "app_6f9d7b35c03591b6965c6e47497a8bcd"  as `app_${string}`;
  const verifyRes = (await verifyCloudProof(
    payload,
    app_id,
    action,
    signal
  )) as IVerifyResponse;

  console.log(verifyRes);

  if (verifyRes.success) {
    res.status(200).json({ verifyRes });
    return;
  } else {
    res.status(400).json({ verifyRes });
    return;
  }
};
