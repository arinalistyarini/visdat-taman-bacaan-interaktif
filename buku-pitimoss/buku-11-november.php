<?php

$k111 = ['Godhand Teru Vol. 61','Kazuki Yamamoto','Elex Media Komputindo','200','14 Oktober 2015'];
$k112 = ['Kung Fu Boy Legends Vol. 17','Takeshi Maekawa','Elex Media Komputindo','200','28 Oktober 2015'];
$k113 = ['Love So Life Vol. 14','Kaede Kouchi','M&C! Comics','192','4 November 2015'];
$k114 = ['Beelzebub (Elex Media) Vol. 23','Ryuhei Tamura','Elex Media Komputindo','192','2 September 2015'];
$k115 = ['Beelzebub (Elex Media) Vol. 24','Ryuhei Tamura','Elex Media Komputindo','192','21 Oktober 2015'];
$komik11 = [$k111, $k112, $k113, $k114, $k115];

$n111 = ['Historical Romance : Prelude To A Scandal - Series Scandal','Delilah Marvelle','Elex Media Komputindo','407','19 Oktober 2015'];
$n112 = ['Dilan: Dia Adalah Dilanku Tahun 1991','Pidi Baiq','Pastel Books','344','Juli 2015'];
$n113 = ['Innocent In Death (Kepolosan dalam Kematian)','J.D. Robb','Gramedia Pustaka Utama','552','22 Oktober 2015'];
$n114 = ['Contemporary Romance : The Shape of My Heart #2B Trilogy','Ann Aguirre','Elex Media Komputindo','464','4 November 2015'];
$n115 = ['Contemporary Romance : Love Bite - The Argeneau Series','Lynsay Sands','Elex Media Komputindo','440','4 November 2015'];
$nonkomik11 = [$n111, $n112, $n113, $n114, $n115];

?>

<div class="show-all-filter-november-2015">
    <div class="row">
        <div class="col-md-5 col-md-offset-1"> <!-- NOVEMBER TAHUN 2015 - KOMIK -->
            <div class="filter-komik-november-2015-to-clone__container">
                <div class="filter-komik-november-2015-to-clone">
                    <div class="best-book-title-komik">
                        Komik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-komik-november-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $komik11[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom" style="background:#eca821">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-komik-november-2015" href="#collapse'.$collapse.'-komik-november-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/11/k'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$komik11[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-komik-november-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$komik11[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$komik11[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$komik11[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$komik11[$i][4].'
                          </div>
                        </div>
                      </div>';
                  } ?>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-5"> <!-- november TAHUN 2015 - NONKOMIK-->
            <div class="filter-nonkomik-november-2015-to-clone__container">
                <div class="filter-nonkomik-november-2015-to-clone">
                    <div class="best-book-title-nonkomik">
                        Nonkomik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-non-komik-november-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $nonkomik11[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom" style="background:#eca821">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-non-komik-november-2015" href="#collapse'.$collapse.'-non-komik-november-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/11/n'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$nonkomik11[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-non-komik-november-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$nonkomik11[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$nonkomik11[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$nonkomik11[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$nonkomik11[$i][4].'
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
<div class="show-komik-or-nonkomik-filter-november-2015"> <!-- NOVEMBER TAHUN 2015 - HASIL FILTERING -->
    <div class="row">
        <div class="col-md-7 grid-center">
            <div class="clone-filter-result-november-2015"></div>
        </div>
    </div>
</div>
