from schematics.contrib.mongo import ObjectIdType
from schematics.models import Model
from schematics.transforms import blacklist
from schematics.types import (
    BaseType,
    BooleanType,
    DateTimeType,
    DateType,
    DictType,
    FloatType,
    IntType,
    ListType,
    ModelType,
    StringType,
)

class Order(Model):
  _id = ObjectIdType(required=True)
  client_name = StringType(required=True)
  phone_model = StringType()
  description = StringType()