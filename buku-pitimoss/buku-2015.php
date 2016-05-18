<?php

$k001 = ['A Secret Marriage: SC','Ando Mai','M&C! Comics','184','8 April 2015'];
$k002 = ['Hai, Miiko! Vol. 27','Eriko Ono','M&C! Comics','192','14 Januari 2015'];
$k003 = ['Naruto Vol. 68','Masashi Kishimoto','Elex Media Komputindo','192','11 Februari 2015'];
$k004 = ['Detektif Conan (Serial Detektif) Vol. 81','Aoyama Gosho','Elex Media Komputindo','184','3 Desember 2014'];
$k005 = ['Prince of Tennis, The II Vol. 8','Takeshi Konomi','M&C! Comics','176','17 Desember 2014'];
$komik00 = [$k001, $k002, $k003, $k004, $k005];

$n001 = ['Dilan: Dia Adalah Dilanku Tahun 1990','Pidi Baiq','Pastel Books (Mizan Group)','332','2014'];
$n002 = ['Metropop: In A Blue Moon','Ilana Tan','Gramedia Pustaka Utama','320','April 2015'];
$n003 = ['Koala Kumal','Raditya Dika','GagasMedia','260','17 Januari 2015'];
$n004 = ['Twivortiare','Ika Natassa','Gramedia Pustaka Utama','360','September 2012'];
$n005 = ['Sunshine Becomes You','Ilana Tan','Gramedia Pustaka Utama','432','2 Februari 2012'];
$nonkomik00 = [$n001, $n002, $n003, $n004, $n005];

?>

<div class="show-all-filter-tahun-2015">
    <div class="row">
        <div class="col-md-5 col-md-offset-1"> <!-- SEPANJANG TAHUN 2015 - KOMIK -->
            <div class="filter-komik-tahun-2015-to-clone__container">
                <div class="filter-komik-tahun-2015-to-clone">
                    <div class="best-book-title-komik">
                        Komik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-komik-2015">

                    <?php
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $komik00[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom panel-heading-custom-background-'.($i+1).'">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-komik-2015" href="#collapse'.$collapse.'-komik-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/0/k'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$komik00[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-komik-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$komik00[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$komik00[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$komik00[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$komik00[$i][4].'
                          </div>
                        </div>
                      </div>';
                  } ?>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-5"> <!-- tahun TAHUN 2015 - NONKOMIK-->
            <div class="filter-nonkomik-tahun-2015-to-clone__container">
                <div class="filter-nonkomik-tahun-2015-to-clone">
                    <div class="best-book-title-nonkomik">
                        Nonkomik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-non-komik-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $nonkomik00[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom panel-heading-custom-background-'.($i+1).'">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-non-komik-2015" href="#collapse'.$collapse.'-non-komik-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/0/n'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$nonkomik00[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-non-komik-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$nonkomik00[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$nonkomik00[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$nonkomik00[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$nonkomik00[$i][4].'
                          </div>
                        </div>
                      </div>';
                  } ?>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="show-komik-or-nonkomik-filter-tahun-2015"> <!-- SEPANJANG TAHUN 2015 - HASIL FILTERING -->
    <div class="row">
        <div class="col-md-7 grid-center">
            <div class="clone-filter-result-tahun-2015"></div>
        </div>
    </div>
</div>
