
#### Questions

* [main page](http://www.gov.pe.ca/gis/index.php3?number=77553&lang=E)
* Q: licensing, reposting in KML?
* Q: metadata explanation

#### Civic Coords 

* schema:
<pre>
<name="X_COORD" type="float">
<name="Y_COORD" type="float">
<name="STREET_NO" type="float">
<name="STREET_NM" type="string">
<name="COMM_NM" type="string">
<name="COUNTY" type="string">
<name="PID" type="float">
<name="SERIAL" type="string">
<name="ESZ" type="string">
<name="UNIQUE_ID" type="string">
<name="last_edi_1" type="string">
</pre>

* example:

<pre>
  <Placemark>
    <ExtendedData><SchemaData schemaUrl="#Civic">
        <SimpleData name="X_COORD">385359.13299999997</SimpleData>
        <SimpleData name="Y_COORD">688780.79700000002</SimpleData>
        <SimpleData name="STREET_NO">85.00000000000</SimpleData>
        <SimpleData name="STREET_NM">YORK POINT RD</SimpleData>
        <SimpleData name="COMM_NM">CORNWALL</SimpleData>
        <SimpleData name="COUNTY">QUN</SimpleData>
        <SimpleData name="PID">248740.00000000000</SimpleData>
        <SimpleData name="ESZ">2020</SimpleData>
        <SimpleData name="UNIQUE_ID">5614664</SimpleData>
        <SimpleData name="last_edi_1">2014/02/25</SimpleData>
    </SchemaData></ExtendedData>
      <Point><coordinates>-63.1898607720984,46.2492993586618</coordinates></Point>
  </Placemark>
</pre>

