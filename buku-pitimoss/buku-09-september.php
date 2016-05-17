<?php

$k091 = ['Dear My Guardy: SC','Umi Ayase','Elex Media Komputindo','200','12 Agustus 2015'];
$k092 = ['Blitz Engagement: SC','Ayumi Cocoro','TIGA LANCAR','192','8 Juli 2015'];
$k093 = ['Naruto Vol. 70','Masashi Kishimoto','Elex Media Komputindo','208','2 September 2015'];
$k094 = ['Detektif Conan (Serial Detektif) Vol. 85','Aoyama Gosho','Elex Media Komputindo','184','19 Agustus 2015'];
$k095 = ['Strobe Edge Vol. 3','Io Sakisaka','M&C! Comics','192','1 Agustus 2015'];
$komik09 = [$k091, $k092, $k093, $k094, $k095];

$n091 = ['Metropop : Critical Eleven','Ika Natassa','Gramedia Pustaka Utama','344','10 Agustus 2015'];
$n092 = ['Historical Romance : Sold To A Laird (Trilogi Tulloch Sgathan)','Karen Ranney','Elex Media Komputindo','488','5 Agustus 2015'];
$n093 = ['Historical Romance : Bewitching The Duke - Serial Wise Woman','Christie Kelley','Elex Media Komputindo','388','20 Mei 2015'];
$n094 = ['Dilan: Dia Adalah Dilanku Tahun 1990','Pidi Baiq','Pastel Books (Mizan Group)','332','2014'];
$n095 = ['Historical Romance : Secret Desires of A Gentleman (Cinta Sang Marquess)','Laura Lee Guhrke','Gramedia Pustaka Utama','368','27 April 2015'];
$nonkomik09 = [$n091, $n092, $n093, $n094, $n095];

?>

<div class="show-all-filter-september-2015">
    <div class="row">
        <div class="col-md-5 col-md-offset-1"> <!-- SEPTEMBER TAHUN 2015 - KOMIK -->
            <div class="filter-komik-september-2015-to-clone__container">
                <div class="filter-komik-september-2015-to-clone">
                    <div class="best-book-title-komik">
                        Komik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-komik-september-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $komik09[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom" style="background:#eca821">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-komik-september-2015" href="#collapse'.$collapse.'-komik-september-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/9/k'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$komik09[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-komik-september-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$komik09[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$komik09[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$komik09[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$komik09[$i][4].'
                          </div>
                        </div>
                      </div>';
                  } ?>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-5"> <!-- september TAHUN 2015 - NONKOMIK-->
            <div class="filter-nonkomik-september-2015-to-clone__container">
                <div class="filter-nonkomik-september-2015-to-clone">
                    <div class="best-book-title-nonkomik">
                        Nonkomik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-non-komik-september-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $nonkomik09[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom" style="background:#eca821">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-non-komik-september-2015" href="#collapse'.$collapse.'-non-komik-september-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/9/n'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$nonkomik09[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-non-komik-september-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$nonkomik09[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$nonkomik09[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$nonkomik09[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$nonkomik09[$i][4].'
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
<div class="show-komik-or-nonkomik-filter-september-2015"> <!-- SEPTEMBER TAHUN 2015 - HASIL FILTERING -->
    <div class="row">
        <div class="col-md-7 grid-center">
            <div class="clone-filter-result-september-2015"></div>
        </div>
    </div>
</div>
