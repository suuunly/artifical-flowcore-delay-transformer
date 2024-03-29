// -----------------------------------------------------------------------------
// Purpose: Transform entrypoint
// this is the entrypoint that will be called when the transformer is invoked
// to transform an event, the return value of this function will be passed to
// the read model adapter.
// -----------------------------------------------------------------------------

import { environment } from "../contracts/environment";
import uuid from "short-uuid";

const delay = environment.TRANSFORMATION_DELAY_MS;

interface Input<T = any> {
  eventId: string;
  validTime: string;
  payload: T;
}

export default async function (input: Input) {

  const id = uuid.generate();
  console.info(`Received event ${input.eventId}, with payload ${JSON.stringify(input.payload)} and valid time ${input.validTime}`);

  console.info(`(${id}) Running delay for ${delay}...`);
  await new Promise((resolve) => setTimeout(resolve, delay));
  console.info(`(${id}) Delay finished.`);

  return {
    eventid: input.eventId,
    validtime: input.validTime,
    ...input.payload,
  };
}
