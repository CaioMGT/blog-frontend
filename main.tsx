/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { h, renderSSR, tw, Helmet, ssr } from "https://crux.land/nanossr@0.0.1";
const Hello = (props) => (
  
  <div class={tw`dark:bg(gray-800)`}>
    <Helmet>
      <title>My blog</title>

    </Helmet>
    <h1 class={tw`text-5xl text-white m-auto mt-20`}>
      Hello {props.name}!
    </h1>
  </div>
);

console.log("Listening on http://localhost:8080");
async function handler(req: Request) : Promise<Response> {
  console.log("eeee")
  const url = new URL(req.url);
  const {body, head, footer} = Helmet.SSR(renderSSR(<Hello></Hello>))
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${head.join('\n')}
  </head>
  <body style="background-color:rgb(38,38,38)">
    ${body}
    ${footer.join('\n')}
    <script src="/bundle.js"></script>
  </body>
  </html>`
  console.log("aaaaa")
  const response = new Response(html, {headers:{"Content-Type": "text/html; charset=utf-8"}, status:200})
  return response
}
serve(handler);
