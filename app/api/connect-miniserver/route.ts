import connectMiniserver from "@/app/helpers/connectMiniserver";

export async function POST(req: Request, res: Response) {
  const json = await req.json();

  const data = json.body;

  const { ip_address, username, password } = data;

  try {
    const socket = await connectMiniserver({ ip_address, username, password });

    await socket.send("jdev/sps/io/DET/SET(Lico;Mood;74)");

    return Response.json({
      status: 200,
      message: "Connection Successful",
    });
  } catch (error) {
    return Response.json({
      status: 501,
      message: "Server Error",
    });
  }
}
