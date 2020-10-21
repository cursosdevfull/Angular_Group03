export interface LocationDto {
  _id: string;
  name: string;
}

export const mappingLocation = (
  result: any | any[]
): LocationDto | LocationDto[] => {
  if (!result) {
    return [];
  }

  if (Array.isArray(result)) {
    const valueReturned: LocationDto[] = result.map((it) => {
      return {
        _id: it._id,
        name: it.name,
      };
    });

    return valueReturned;
  } else {
    const valueReturned: LocationDto = {
      _id: result._id,
      name: result.name,
    };

    return valueReturned;
  }
};
