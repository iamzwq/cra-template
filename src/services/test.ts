import { request } from "./request";

export function fetchTest(params: any) {
  return request({
    method: "get",
    url: "/test",
    params,
  });
}

export function fetchTest1(data: any) {
  return request({
    method: "post",
    url: "/test1",
    data,
  });
}
