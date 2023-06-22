import type { RouteRecordRaw } from 'vue-router';
export async function getRemoteRoutes(
  RemoteRoutes: Promise<any>
): Promise<Array<RouteRecordRaw>> {
  let remoteRoutes: Array<RouteRecordRaw> = [];
  try {
    // await 키워드는 피연산자(operand)의 값을 반환. 피연산자가 Promise 객체이면 then 메서드를 호출해 얻은 값을 반환.

    remoteRoutes = (await RemoteRoutes)?.default?.options?.routes;
    return remoteRoutes;
  } catch (e) {
    console.error(e);
    return remoteRoutes;
  }
}
