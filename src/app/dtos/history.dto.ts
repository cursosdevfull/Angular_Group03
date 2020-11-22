export interface HistoryDto {
  _id: string;
  dateRequest: Date;
  contractor: string;
  authorizationCode: string;
  policy: string;
  // paciente
  document: string;
  name: string;
  lastName: string;
  phone: string;
  age: number;
  typeAge: boolean;
  gender: number;
  // ocurrencia
  address: string;
  reference: string;
  // attention
  diagnostic: string;
  // medic
  medic: any;
  // driver
  driver: any;
  // annotations
  symptoms: string;
  treatment: string;
}

export const mappingHistory = (
  result: any | any[]
): HistoryDto | HistoryDto[] => {
  if (!result) {
    return [];
  }

  if (Array.isArray(result)) {
    const valueReturned: HistoryDto[] = result.map((it) => {
      return {
        _id: it._id,
        dateRequest: it.dateRequest,
        contractor: it.contractor,
        authorizationCode: it.authorizationCode,
        policy: it.policy,
        // paciente
        document: it.document,
        name: it.name,
        lastName: it.lastName,
        phone: it.phone,
        age: it.age,
        typeAge: it.typeAge,
        gender: it.gender,
        // ocurrencia
        address: it.address,
        reference: it.reference,
        // attention
        diagnostic: it.diagnostic,
        // medic
        medic: it.medic,
        // driver
        driver: it.driver,
        // annotations
        symptoms: it.symptoms,
        treatment: it.treatment,
      };
    });

    return valueReturned;
  } else {
    const valueReturned: HistoryDto = {
      _id: result._id,
      dateRequest: result.dateRequest,
      contractor: result.contractor,
      authorizationCode: result.authorizationCode,
      policy: result.policy,
      // paciente
      document: result.document,
      name: result.name,
      lastName: result.lastName,
      phone: result.phone,
      age: result.age,
      typeAge: result.typeAge,
      gender: result.gender,
      // ocurrencia
      address: result.address,
      reference: result.reference,
      // attention
      diagnostic: result.diagnostic,
      // medic
      medic: result.medic,
      // driver
      driver: result.driver,
      // annotations
      symptoms: result.symptoms,
      treatment: result.treatment,
    };

    return valueReturned;
  }
};
