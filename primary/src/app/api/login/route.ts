import { ValidatePayload } from "global/types";
import { quickResponseWithStatus } from "global/utils";

export async function POST(request: Request) {
    const body = await request.json();
    const response = await fetch("http://localhost:3000/api/validate", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body,
    });
    const payload: ValidatePayload = await response.json();

    return quickResponseWithStatus(response.status, payload);
}
