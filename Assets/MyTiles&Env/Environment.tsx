<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.10" tiledversion="1.12.2" name="Environment" tilewidth="16" tileheight="16" tilecount="1300" columns="52">
 <image source="tileset.png" width="832" height="400"/>
 <tile id="7">
  <animation>
   <frame tileid="7" duration="900"/>
   <frame tileid="8" duration="900"/>
   <frame tileid="9" duration="900"/>
   <frame tileid="10" duration="900"/>
  </animation>
 </tile>
 <wangsets>
  <wangset name="Island" type="corner" tile="-1">
   <wangcolor name="Sand" color="#ff0000" tile="-1" probability="1"/>
   <wangcolor name="Water" color="#00ff00" tile="-1" probability="1"/>
   <wangtile tileid="370" wangid="0,2,0,1,0,2,0,2"/>
   <wangtile tileid="371" wangid="0,2,0,1,0,1,0,2"/>
   <wangtile tileid="372" wangid="0,2,0,2,0,1,0,2"/>
   <wangtile tileid="373" wangid="0,1,0,2,0,1,0,1"/>
   <wangtile tileid="374" wangid="0,1,0,0,0,0,0,1"/>
   <wangtile tileid="375" wangid="0,1,0,1,0,2,0,1"/>
   <wangtile tileid="422" wangid="0,1,0,1,0,2,0,2"/>
   <wangtile tileid="423" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="424" wangid="0,2,0,2,0,1,0,1"/>
   <wangtile tileid="425" wangid="0,0,0,0,0,1,0,1"/>
   <wangtile tileid="426" wangid="0,2,0,2,0,2,0,2"/>
   <wangtile tileid="427" wangid="0,1,0,1,0,0,0,0"/>
   <wangtile tileid="474" wangid="0,1,0,2,0,2,0,2"/>
   <wangtile tileid="475" wangid="0,1,0,2,0,2,0,1"/>
   <wangtile tileid="476" wangid="0,2,0,2,0,2,0,1"/>
   <wangtile tileid="477" wangid="0,2,0,1,0,1,0,1"/>
   <wangtile tileid="478" wangid="0,0,0,1,0,1,0,0"/>
   <wangtile tileid="479" wangid="0,1,0,1,0,1,0,2"/>
  </wangset>
  <wangset name="Ground" type="corner" tile="-1">
   <wangcolor name="Sand" color="#ff0000" tile="-1" probability="1"/>
   <wangcolor name="Grass" color="#00ff00" tile="-1" probability="1"/>
   <wangtile tileid="0" wangid="0,2,0,2,0,2,0,2"/>
   <wangtile tileid="1" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="52" wangid="0,2,0,1,0,2,0,2"/>
   <wangtile tileid="53" wangid="0,2,0,1,0,1,0,2"/>
   <wangtile tileid="54" wangid="0,2,0,2,0,1,0,2"/>
   <wangtile tileid="55" wangid="0,1,0,2,0,1,0,1"/>
   <wangtile tileid="56" wangid="0,1,0,2,0,2,0,1"/>
   <wangtile tileid="57" wangid="0,1,0,1,0,2,0,1"/>
   <wangtile tileid="104" wangid="0,1,0,1,0,2,0,2"/>
   <wangtile tileid="105" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="106" wangid="0,2,0,2,0,1,0,1"/>
   <wangtile tileid="107" wangid="0,2,0,2,0,1,0,1"/>
   <wangtile tileid="108" wangid="0,2,0,2,0,2,0,2"/>
   <wangtile tileid="109" wangid="0,1,0,1,0,2,0,2"/>
   <wangtile tileid="156" wangid="0,1,0,2,0,2,0,2"/>
   <wangtile tileid="157" wangid="0,1,0,2,0,2,0,1"/>
   <wangtile tileid="158" wangid="0,2,0,2,0,2,0,1"/>
   <wangtile tileid="159" wangid="0,2,0,1,0,1,0,1"/>
   <wangtile tileid="160" wangid="0,2,0,1,0,1,0,2"/>
   <wangtile tileid="161" wangid="0,1,0,1,0,1,0,2"/>
  </wangset>
  <wangset name="Snow" type="corner" tile="-1">
   <wangcolor name="Snow" color="#ff0000" tile="-1" probability="1"/>
   <wangcolor name="Grass" color="#00ff00" tile="-1" probability="1"/>
   <wangtile tileid="2" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="76" wangid="0,2,0,1,0,2,0,2"/>
   <wangtile tileid="77" wangid="0,2,0,1,0,1,0,2"/>
   <wangtile tileid="78" wangid="0,2,0,2,0,1,0,2"/>
   <wangtile tileid="79" wangid="0,1,0,2,0,1,0,1"/>
   <wangtile tileid="80" wangid="0,1,0,2,0,2,0,1"/>
   <wangtile tileid="81" wangid="0,1,0,1,0,2,0,1"/>
   <wangtile tileid="128" wangid="0,1,0,1,0,2,0,2"/>
   <wangtile tileid="129" wangid="0,1,0,1,0,1,0,1"/>
   <wangtile tileid="130" wangid="0,2,0,2,0,1,0,1"/>
   <wangtile tileid="131" wangid="0,2,0,2,0,1,0,1"/>
   <wangtile tileid="132" wangid="0,2,0,2,0,2,0,2"/>
   <wangtile tileid="133" wangid="0,1,0,1,0,2,0,2"/>
   <wangtile tileid="180" wangid="0,1,0,2,0,2,0,2"/>
   <wangtile tileid="181" wangid="0,1,0,2,0,2,0,1"/>
   <wangtile tileid="182" wangid="0,2,0,2,0,2,0,1"/>
   <wangtile tileid="183" wangid="0,2,0,1,0,1,0,1"/>
   <wangtile tileid="184" wangid="0,2,0,1,0,1,0,2"/>
   <wangtile tileid="185" wangid="0,1,0,1,0,1,0,2"/>
  </wangset>
  <wangset name="Mountain" type="mixed" tile="-1">
   <wangcolor name="inside" color="#ff0000" tile="-1" probability="1"/>
   <wangcolor name="outside" color="#00ff00" tile="-1" probability="1"/>
   <wangtile tileid="64" wangid="2,2,2,2,2,2,2,0"/>
   <wangtile tileid="65" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="66" wangid="2,0,2,2,2,2,2,2"/>
   <wangtile tileid="116" wangid="2,2,2,2,2,2,2,2"/>
   <wangtile tileid="117" wangid="1,1,1,1,1,1,1,1"/>
   <wangtile tileid="118" wangid="2,2,2,2,2,2,2,2"/>
   <wangtile tileid="168" wangid="2,2,2,2,2,0,2,2"/>
   <wangtile tileid="169" wangid="2,2,2,2,2,2,2,2"/>
   <wangtile tileid="170" wangid="2,2,2,0,2,2,2,2"/>
  </wangset>
 </wangsets>
</tileset>
