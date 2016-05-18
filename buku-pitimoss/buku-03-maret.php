<?php

$k031 = ['Angel Voice Vol. 20','Takao Koyano','Level Comics (Elex Group)','192','11 Maret 2015'];
$k032 = ['Love Changes - Return: SC','Saijo Ayano','M&C! Comics','184','11 Februari 2015'];
$k033 = ['I Would Rather Fall in Love','Goto Misaki','M&C! Comics','192','30 Februari 2015'];
$k034 = ['Detektif Conan: Serial Detektif Vol. 82','Aoyama Gosho','Elex Media Komputindo','192','30 Februari 2015'];
$k035 = ['Evening First Star: SC','Nakashima Vega','M&C! Comics','192','4 Maret 2015'];
$komik03 = [$k031, $k032, $k033, $k034, $k035];

$n031 = ['With No Remorse (Tanpa Penyesalan)','Cindy Gerard','Gramedia Pustaka Utama','416','Februari 2015'];
$n032 = ['Amore: Let Me Be With You','Ria N. Badaria','Gramedia Pustaka Utama','352','26 Februari 2015'];
$n033 = ['An Inheritance of Shame','Kate Hewitt','Gramedia Pustaka Utama','256','23 Februari 2015'];
$n034 = ['R.I.S.A.R.A','Sara Wijayanto','Rak Buku','162','Desember 2014'];
$n035 = ['The Sum of All Kisses (Sehangat Kecupan)','Julia Quinn','Gramedia Pustaka Utama','432','8 Januari 2015'];
$nonkomik03 = [$n031, $n032, $n033, $n034, $n035];

?>

<div class="show-all-filter-maret-2015">
    <div class="row">
        <div class="col-md-5 col-md-offset-1"> <!-- MARET TAHUN 2015 - KOMIK -->
            <div class="filter-komik-maret-2015-to-clone__container">
                <div class="filter-komik-maret-2015-to-clone">
                    <div class="best-book-title-komik">
                        Komik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-komik-maret-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $komik03[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom panel-heading-custom-background-'.($i+1).'">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-komik-maret-2015" href="#collapse'.$collapse.'-komik-maret-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/3/k'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$komik03[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-komik-maret-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$komik03[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$komik03[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$komik03[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$komik03[$i][4].'
                          </div>
                        </div>
                      </div>';
                  } ?>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-5"> <!-- maret TAHUN 2015 - NONKOMIK-->
            <div class="filter-nonkomik-maret-2015-to-clone__container">
                <div class="filter-nonkomik-maret-2015-to-clone">
                    <div class="best-book-title-nonkomik">
                        Nonkomik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-non-komik-maret-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $nonkomik03[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom panel-heading-custom-background-'.($i+1).'">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-non-komik-maret-2015" href="#collapse'.$collapse.'-non-komik-maret-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/3/n'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$nonkomik03[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-non-komik-maret-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$nonkomik03[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$nonkomik03[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$nonkomik03[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$nonkomik03[$i][4].'
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
<div class="show-komik-or-nonkomik-filter-maret-2015"> <!-- MARET TAHUN 2015 - HASIL FILTERING -->
    <div class="row">
        <div class="col-md-7 grid-center">
            <div class="clone-filter-result-maret-2015"></div>
        </div>
    </div>
</div>
