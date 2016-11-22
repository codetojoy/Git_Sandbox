
#### Questions

* [main page](http://www.gov.pe.ca/gis/index.php3?number=77553&lang=E)
* Q: licensing, reposting in KML?
* Q: metadata explanation

#### Civic Coords 

* schema:
<pre>
X_COORD" type="float"
Y_COORD" type="float"
STREET_NO" type="float"
STREET_NM" type="string"
COMM_NM" type="string"
COUNTY" type="string"
PID" type="float"
SERIAL" type="string"
ESZ" type="string"
UNIQUE_ID" type="string"
last_edi_1" type="string"
</pre>

* example:

```
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
```

#### Civic Roads

* schema:
```
"OWNERSHIP" type="string"
"MUNICIPALI" type="string"
"COMMUNITY" type="string"
"ROAD_STATU" type="string"
"LENGTH_MET" type="float"
"last_edi_1" type="string"
```

* example:

```
  <Placemark>
    <name>YORK POINT RD</name>
    <Style><LineStyle><color>ff0000ff</color></LineStyle><PolyStyle><fill>0</fill></PolyStyle></Style>
    <ExtendedData><SchemaData schemaUrl="#CivicRoads">
        <SimpleData name="OWNERSHIP">MUNICIPAL-PUBLIC</SimpleData>
        <SimpleData name="MUNICIPALI">CORNWALL</SimpleData>
        <SimpleData name="COMMUNITY">CORNWALL</SimpleData>
        <SimpleData name="LENGTH_MET">325.09000000000</SimpleData>
    </SchemaData></ExtendedData>
      <MultiGeometry><LineString><altitudeMode>clampToGround</altitudeMode><coordinates>-63.1662761979017,46.2202481318115 -63.1664061152909,46.2190730015324 -63.1667442682777,46.2173352852241</coordinates></LineString></MultiGeometry>
  </Placemark>
```

#### Civic Community

* schema:
```
"COMM_NM" type="string"
"COUNTY" type="string"
"UNIQUE_ID" type="string"
"last_edi_1" type="string"
```

* example:
```
N/A
```
