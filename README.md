# Dokumentasi

- https://documenter.getpostman.com/view/18533516/UVRGCiKq

# API Spec

## Register

Request :

- Method : POST
- Endpoint : `/register`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "string",
  "address": "string"
},
```

## Login

Request :

- Method : POST
- Endpoint : `/login`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "string",
  "address": "string"
},
```

Response :

```json
{
  "TOKEN" : "string
},
```

## Wishlist

```json
{
  "_id": ObjectId("AA1"),
  "name": "string",
  "address": "string"
},
```

Relation: Many to Many
Description: Many user -> Many wishlist
Method: Referencing

## Search Hotel by Kota

Request :

- Method : GET
- Endpoint : `/hotels?filter=city`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "_id": ObjectId("123"),
    "name": "string",
    "image": "string",
    "rating": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Input Hotel

Request :

- Method : POST
- Endpoint : `/hotel/addhotel`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "_id": ObjectId("123"),
  "name": "string",
  "address": {
    "street": "string",
    "district": "string",
    "sub-district": "string",
    "postal_code": "integer",
    "state": "string"
  },
  "image": "",
  "email": "string",
  "phone_num": "integer",
  "url": "string"
}
```

Relation: One to Many
Description: One hotel -> Many Asset
Method: Referencing

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "_id": ObjectId("123"),
    "name": "string",
    "address": {
      "street": "string",
      "district": "string",
      "sub-district": "string",
      "postal_code": "integer",
      "state": "string"
    },
    "image": "string",
    "email": "string",
    "phone_num": "integer",
    "url": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update Hotel

Request :

- Method : PATCH
- Endpoint : `/hotel/:id_hotel`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "_id": ObjectId("123"),
  "name": "string",
  "address": {
    "street": "string",
    "district": "string",
    "sub-district": "string",
    "postal_code": "integer",
    "state": "string"
  },
  "image": "",
  "email": "string",
  "phone_num": "integer",
  "url": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "_id": ObjectId("123"),
    "name": "string",
    "address": {
      "street": "string",
      "district": "string",
      "sub-district": "string",
      "postal_code": "integer",
      "state": "string"
    },
    "image": "string",
    "email": "string",
    "phone_num": "integer",
    "url": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Delete Hotel

Request :

- Method : PATCH
- Endpoint : `/hotel/:id_hotel`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

## Get Popular Hotel

Request :

- Method : GET
- Endpoint : `/hotels?filter=popular`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "_id": ObjectId("123"),
    "name": "string",
    "image": "string",
    "rating": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

Relation: One to Many
Description: One hotel -> Many Reviews
Method: Referencing

### Get All Hotel

Request :

- Method : GET
- Endpoint : `/hotels?filter=latest`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "_id": ObjectId("123"),
      "name": "string",
      "image": "string",
      "rating": "integer"
    },
    {
      "_id": ObjectId("123"),
      "name": "string",
      "image": "string",
      "rating": "integer"
    }
  ]
}
```

## View Hotel by id

Request :

- Method : GET
- Endpoint : `/hotel/:id_hotel`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "_id": ObjectId("123"),
    "name": "string",
    "address": {
      "street": "string",
      "district": "string",
      "sub-district": "string",
      "postal_code": "integer",
      "state": "string"
    },
    "rating": "integer",
    "image": "string",
    "email": "string",
    "phone_num": "integer",
    "url": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## View Wisata by id

Request :

- Method : GET
- Endpoint : `/wisata/:id_wisata`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "_id": ObjectId("123"),
    "name": "string",
    "address": {
      "street": "string",
      "district": "string",
      "sub-district": "string",
      "postal_code": "integer",
      "state": "string"
    },
    "rating": "integer",
    "image": "string",
    "email": "string",
    "phone_num": "integer",
    "url": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

### Get Popular Wisata

Request :

- Method : GET
- Endpoint : `/wisatas?filter=popular`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "_id": ObjectId("123"),
    "name": "string",
    "image": "string",
    "rating": "integer",
    "createdAt": "date",
    "updatedAt": "date"
  }
  }
}
```

Relation: One to Many
Description: One Tourist Attraction -> Many Reviews
Method: Referencing

### View Wisata all

Request :

- Method : GET
- Endpoint : `/wisatas?filter=latest`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "_id": ObjectId("123"),
      "name": "string",
      "image": "string",
      "rating": "integer"
    },
    {
      "_id": ObjectId("123"),
      "name": "string",
      "image": "string",
      "rating": "integer"
    }
  ]
}
```

## Input Wisata

Request :

- Method : POST
- Endpoint : `/wisata/addwisata`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "id": "string, unique",
  "name": "string",
  "address": {
    "street": "string",
    "district": "string",
    "sub-district": "string",
    "postal_code": "integer",
    "state": "string"
  },
  "image": "string",
  "email": "string",
  "phone_num": "integer",
  "url": "string"
}
```

Relation: One to Many
Description: One wisata -> Many Asset
Method: Referencing

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "name": "string",
    "address": {
      "street": "string",
      "district": "string",
      "sub-district": "string",
      "postal_code": "integer",
      "state": "string"
    },
    "image": "image.com",
    "email": "string",
    "phone_num": "integer",
    "url": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update Wisata

Request :

- Method : PATCH
- Endpoint : `/wisata/:id_wisata`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "_id": ObjectId("123"),
  "name": "string",
  "address": {
    "street": "string",
    "district": "string",
    "sub-district": "string",
    "postal_code": "integer",
    "state": "string"
  },
  "image": "string",
  "email": "string",
  "phone_num": "integer",
  "url": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "_id": ObjectId("123"),
    "name": "string",
    "address": {
      "street": "string",
      "district": "string",
      "sub-district": "string",
      "postal_code": "integer",
      "state": "string"
    },
    "image": "string",
    "email": "string",
    "phone_num": "integer",
    "url": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Review Hotel

Sort by:

- Tanggal
- Rating

## Input Review

Request :

- Method : POST
- Endpoint : `/hotel/:placeId/addreview`, `/wisata/:placeId/addreview`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "_id": ObjectId("r123"),
  "judul": "string",
  "ulasan": "string",
  "rating": "number",
  "fasilitas": {
      "bukti_vaksin": "string",
      "jarak_fisik": "string",
      "cuci_tangan": "string",
      "parkir": "string",
      "unik": "string",
      "multilanguage": "string",
      "pelayanan": "string"
    },
  "penilaian": {
    "layanan": "integer",
    "kebersihan": "integer",
    "nilai": "integer"
    },
  "harga": "string",
  "foto": "string",
  "saran": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "_id": ObjectId("r123"),
    "judul": "string",
    "ulasan": "string",
    "rating": "number",
    "fasilitas": {
        "bukti_vaksin": "string",
        "jarak_fisik": "string",
        "cuci_tangan": "string",
        "parkir": "string",
        "unik": "string",
        "multilanguage": "string",
        "pelayanan": "string"
      },
    "penilaian": {
      "layanan": "integer",
      "kebersihan": "integer",
      "nilai": "integer"
      },
    "harga": "string",
    "foto": "string",
    "saran": "string",
    "placeId": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

Relation: One to Many
Description: One Users -> Many Reviews
Method: Referencing

## Menampilkan Review berdasarkan ID tempat

## Input Review

Request :

- Method : POST
- Endpoint : `/hotel/:placeId/reviews`, `/wisata/:placeId/reviews`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "_id": ObjectId("r123"),
  "judul": "string",
  "ulasan": "string",
  "rating": "number",
  "fasilitas": {
      "bukti_vaksin": "string",
      "jarak_fisik": "string",
      "cuci_tangan": "string",
      "parkir": "string",
      "unik": "string",
      "multilanguage": "string",
      "pelayanan": "string"
    },
  "penilaian": {
    "layanan": "integer",
    "kebersihan": "integer",
    "nilai": "integer"
    },
  "harga": "string",
  "foto": "string",
  "saran": "string",
  "placeId": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "_id": ObjectId("r123"),
    "judul": "string",
    "ulasan": "string",
    "rating": "number",
    "fasilitas": {
        "bukti_vaksin": "string",
        "jarak_fisik": "string",
        "cuci_tangan": "string",
        "parkir": "string",
        "unik": "string",
        "multilanguage": "string",
        "pelayanan": "string"
      },
    "penilaian": {
      "layanan": "integer",
      "kebersihan": "integer",
      "nilai": "integer"
      },
    "harga": "string",
    "foto": "string",
    "saran": "string",
    "placeId": "string",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

Relation: One to Many
Description: One Place -> Many Reviews
Method: Referencing

## Save Wishlist

Request :/maps

- Method : POST
- Endpoint : ``
- Header :
  - Accept: application/json

Body :

```json
{
  "id": "string, unique",
  "name": "string",
  "address": "string"
}
```

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

# View Wishlist by Id User

Request :

- Method : GET
- Endpoint : `/wishlist/:id_user`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "_id": ObjectId("123"),
    "name": "string",
    "address": "string"
    }
}
```
