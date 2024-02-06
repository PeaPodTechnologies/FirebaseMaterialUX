import { DocumentReference } from '@firebase/firestore-types';

type TYPE_KEY_STRING = 'string';
type TYPE_KEY_NUMBER = 'number';
type TYPE_KEY_BOOLEAN = 'boolean';
type TYPE_KEY_NULL = 'null';
type TYPE_KEY_ARRAY = 'array';
type TYPE_KEY_MAP = 'map';

type FirestoreCRUDCode = 'fail' | 'read' | 'update' | 'create' | 'delete';

type FieldReference = {
  doc: DocumentReference;
  field: string;
};


// Firestore Primitive Types
// KEYS - STRING UNION
type PrimitiveFieldTypes = TYPE_KEY_STRING | TYPE_KEY_NUMBER | TYPE_KEY_BOOLEAN | TYPE_KEY_NULL;
// TYPES - PRIMITIVE UNION
type FirestorePrimitives = string | number | boolean | null;

// TYPE-KEY CONVERSION: CONDITIONAL STRING TYPE
type PrimitiveFieldType<T extends FirestorePrimitives> = 
  T extends string ? TYPE_KEY_STRING : 
  T extends number ? TYPE_KEY_NUMBER : 
  T extends boolean ? TYPE_KEY_BOOLEAN : 
  TYPE_KEY_NULL;

// KEY-TYPE CONVERSION: CONDITIONAL PRIMITIVE TYPE
type FirestorePrimitive<T extends PrimitiveFieldTypes> = 
  T extends TYPE_KEY_STRING ? string : 
  T extends TYPE_KEY_NUMBER ? number : 
  T extends TYPE_KEY_BOOLEAN ? boolean : 
  null;

// VALUE BY TYPE
type FirestoreValue<T = FirestorePrimitives> = {
  type: PrimitiveFieldType<T>; // TYPE KEY
  value: T; // VALUE
}

type FieldTypes = PrimitiveFieldTypes | 'array' | 'map';

// LIST OF GENERIC VALUES
type FirestoreList = {
  type: 'array';
  value: FirestoreValue[];
};

// LIST OF TYPED VALUES
type FirestoreArray<T = FirestorePrimitive> = FirestoreList & {
  value: FirestoreValue<T>[];
};

// OBJECT OF GENERIC VALUES
type FirestoreObject = {
  type: 'map';
  value: {
    [key: string]: FirestoreValue;
  };
};

// type FirestoreTypes = FirestoreValue | FirestoreList | FirestoreObject;

// type FieldType<T extends FirestoreTypes> = (
//   T extends FirestorePrimitive ? PrimitiveFieldType<T> :
//   T extends FirestoreList ? 'array' :
//   T extends FirestoreObject ? 'map' :
//   'null'
// )

type UXBaseProps = FieldReference & {
  disabled?: boolean;
}; // For MUI prop drilling

type UXProps<T = FirestorePrimitives> = UXBaseProps & FirestoreValue<T> & {
  label: string;
};

type UXArrayProps<T = FirestorePrimitives> = UXBaseProps & FirestoreArray<T> & {
  getKey: (index: number) => string;
  getLabel: (index: number) => string;
  onChange: (index: number, value: T) => FirestoreUXCode;
};