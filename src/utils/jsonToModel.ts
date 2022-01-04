function normalizeValue(value: any, schema: any) {
  if (!value) {
    return schema.default;
  }

  if (schema.type === "array") {
    if (Array.isArray(value)) {
      if (schema.transform) {
        const transformedValue = schema.transform(value);
        if (Array.isArray(transformedValue)) {
          // eslint-disable-next-line no-use-before-define
          return transformedValue.map((e) => jsonToModel(e, schema.model));
        }
        return transformedValue;
      }
      // eslint-disable-next-line no-use-before-define
      return value.map((e) => jsonToModel(e, schema.model));
    }
    throw new Error(`${schema.key} is of type ${typeof value}, expected ${schema.type}`);
  }

  // eslint-disable-next-line valid-typeof
  if (schema.type && typeof value !== schema.type.toString().toLocaleLowerCase()) {
    throw new Error(`${schema.key} is of type ${typeof value}, expected ${schema.type}`);
  }

  if (schema.transform) {
    return schema.transform(value);
  }

  return value;
}

function jsonToModel(json: any, model: Record<string, any>) {
  //   debugger;
  const parsedModel: { [k in keyof Record<string, any>]?: any } = {};
  Object.entries(model).forEach((e) => {

    // console.log("model: ", e);
    const [key, value] = e;
    const normalizeSchema = model[key];
    // console.log("normalizeSchema: ", normalizeSchema);
    // console.log("gimme json: ", json);
    const rawValue = json[(value as any).key];
    // console.log("rawValue: ", rawValue);
    parsedModel[key] = normalizeValue(rawValue, normalizeSchema);
  });
  return parsedModel;
}

export default jsonToModel;
