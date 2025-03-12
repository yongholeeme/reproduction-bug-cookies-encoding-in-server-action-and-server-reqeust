# reproduction-bug-cookies-encoding-in-server-action-and-server-reqeust

<https://reproduction-bug-encoding-server-action-nextjs.vercel.app>

In server, there are two ways to get cookies. First, reading cookies from `cookies()` function. And another way is reading cookies in header from `headers()` function. But I found cookies in `headers()` work sort of differently between general server request and server action reqeust.

In general server request, `headers().get('cookie')` returns values barely regardless of whether each value is encoded or not. However in server action request, `headers().get('cookie')` returns all values as encoded. It's totally the same code but behave differently when it's be excuted.

This problem is only reproduced in production. cc <https://github.com/vercel/next.js/issues/77010>

<https://github.com/user-attachments/assets/1e026897-0c18-4634-ae3a-ed03d2beafd0>
