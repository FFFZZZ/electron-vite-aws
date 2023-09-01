import { CredentialProviderChain, Credentials, S3 } from "aws-sdk";

const s3Client = new S3({
  apiVersion: "2006-03-01",
  computeChecksums: true,
  region: "aws-global",
  endpoint: "http://127.0.0.1:9000",
  credentialProvider: new CredentialProviderChain([
    () =>
      new Credentials("5cW8sPX6jnEQwuMU", "cGN4VrAXsGaIHvv70tZLEDNUefjjNlQa"),
  ]),
  maxRetries: 10,
  s3ForcePathStyle: true,
  signatureVersion: "v4",
});

process.on("message", () => {
  s3Client.putObject({
    Bucket: "ski",
    Key: `${new Date().getTime()}.txt`,
    Body: "hello world",
  });
});
