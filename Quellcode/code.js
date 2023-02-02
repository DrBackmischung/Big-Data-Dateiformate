ParquetReader<GenericRecord> reader = AvroParquetReader<GenericRecord>.builder(path).build();
GenericRecord record = reader.read();

DatumReader<GenericRecord> datumReader = new GenericDatumReader<>();
DataFileReader<GenericRecord> dataFileReader = new DataFileReader<>(file, datumReader);
GenericRecord record = null;
while (dataFileReader.hasNext()) {
  record = dataFileReader.next(record);
}

Reader reader = OrcFile.createReader(path, OrcFile.readerOptions(conf));
RecordReader rows = reader.rows();
while (rows.hasNext()) {
  Object row = rows.next();
}

001;Coca Cola;T2.143-U2;
002;Fanta Erdbeere;T2.143-A5b;
003;Mezzo Mix;T2.145-B1;

{
  [
    {
      “id”: 001
      “name”: “Coca Cola”
      “lagerort”: ”T2.143-U2”
    },
    {
      “id”: 002
      “name”: “Fanta Erdbeere”
      “lagerort”: ”T2.143-A5b”
    },
    {
      “id”: 003
      “name”: “Mezzo Mix”
      “lagerort”: ”T2.145-B1”
    }
  ]
}

<?xml version=“1.0”?>
<produkte>
  <produkt id=“001”>
    <name>Coca Cola</name>
    <lagerort>T2.143-U2</lagerort>
  </produkt>
  <produkt id=“002”>
    <name>Fanta Erdbeere</name>
    <lagerort>T2.143-A5b</lagerort>
  </produkt>
  <produkt id=“003”>
    <name>Mezzo Mix</name>
    <lagerort>T2.145-B1</lagerort>
  </produkt>
</produkte>
