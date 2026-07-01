import { inngest } from "@/inngest/client";


export async function POST(req) {

  try {
    const body = await req.json();

    if (!body?.user) {
      return Response.json(
        { error: "User data is required" },
        { status: 400 }
      );
    }

    const result = await inngest.send({
      name: "user.create",
      data: {
        user: body.user,
      }
    });

    return Response.json({ success: true, result });
  } catch (error) {
    console.error("create user api error", error);


  return Response.json(
    { error: error.message || "Something went wrong" },
    { status: 500 }
  );
}
}