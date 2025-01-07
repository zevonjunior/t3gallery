import Link from "next/link";
import { mock } from "node:test";

const mockUrls = [
  "https://utfs.io/f/yrCRR6zqzBVUDn3xuKHvduOncLTUaysXeEf2S3F1mPbx5KWY",
  "https://utfs.io/f/yrCRR6zqzBVUnunl7L0et2JsifCPwNg3YWLo9lRVmF6XHjcG",
  "https://utfs.io/f/yrCRR6zqzBVU8LEo52FPRBzIOq1UygWbG46AtoeQZjVEv3i8",
  "https://utfs.io/f/yrCRR6zqzBVUUMe3AB8rYXibp1T2gzklW0Ryt4KDAfEc3LJM",
  "https://utfs.io/f/yrCRR6zqzBVUDn3xuKHvduOncLTUaysXeEf2S3F1mPbx5KWY"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index+1,
  url,
}) );

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        mockImages.map((image) =>(
          <div key={image.id} className="w-48" >
            <img src={image.url} alt={"image"} />
          </div>
        ))}

      </div>
    </main>
  );
}
