<?php

$k011 = ['Oh! My God','Min-Xuan Lin','M&C! Comics','176','31 Desember 2014'];
$k012 = ['A Miracle Between Ocean & Moon: SC','Milka','M&C! Comics','168','31 Desember 2014'];
$k013 = ['Hey, I’m Popular Vol. 1','Junko','M&C! Comics','160','7 Januari 2015'];
$k014 = ['The Goddess of Libra Vol. 4','M&C! Comics','Watari Sakou','224','31 Desember 2014'];
$k015 = ['Ouroboros Vol. 7','Level Comics (Elex Group)','Yuya Kanzaki','192','3 Desember 2014'];
$komik01 = [$k011, $k012, $k013, $k014, $k015];

$n011 = ['Dilan: Dia Adalah Dilanku Tahun 1990','Pidi Baiq','Pastel Books (Mizan Group)','332','2014'];
$n012 = ['Temptation: Fallen Angel','Eden Bradley','Elex Media Komputindo','464','31 Desember 2014'];
$n013 = ['Tangled','Emma Chase','GagasMedia','332','Desember 2014'];
$n014 = ['Restart','Nina Ardianti','GagasMedia','456','Mei 2013'];
$n015 = ['R.I.S.A.R.A','Sara Wijayanto','Rak Buku','162','Desember 2014'];
$nonkomik01 = [$n011, $n012, $n013, $n014, $n015];

?>

<div class="show-all-filter-januari-2015">
    <div class="row">
        <div class="col-md-5 col-md-offset-1"> <!-- JANUARI TAHUN 2015 - KOMIK -->
            <div class="filter-komik-januari-2015-to-clone__container">
                <div class="filter-komik-januari-2015-to-clone">
                    <div class="best-book-title-komik">
                        Komik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-komik-januari-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $komik01[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom" style="background:#eca821">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-komik-januari-2015" href="#collapse'.$collapse.'-komik-januari-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/1/k'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$komik01[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-komik-januari-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$komik01[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$komik01[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$komik01[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$komik01[$i][4].'
                          </div>
                        </div>
                      </div>';
                      } ?>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-5"> <!-- JANUARI TAHUN 2015 - NONKOMIK-->
            <div class="filter-nonkomik-januari-2015-to-clone__container">
                <div class="filter-nonkomik-januari-2015-to-clone">
                    <div class="best-book-title-nonkomik">
                        Nonkomik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-non-komik-januari-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $nonkomik01[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom" style="background:#eca821">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-non-komik-januari-2015" href="#collapse'.$collapse.'-non-komik-januari-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/1/n'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$nonkomik01[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-non-komik-januari-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$nonkomik01[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$nonkomik01[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$nonkomik01[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$nonkomik01[$i][4].'
                          </div>
                        </div>
                      </div>
                        ';
                    }

                      ?>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="show-komik-or-nonkomik-filter-januari-2015"> <!-- JANUARI TAHUN 2015 - HASIL FILTERING -->
    <div class="row">
        <div class="col-md-7 grid-center">
            <div class="clone-filter-result-januari-2015"></div>
        </div>
    </div>
</div>