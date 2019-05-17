import _ from "lodash";

export function paginate(items, pageNo, pageSize) {
  const startIndex = (pageNo - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
