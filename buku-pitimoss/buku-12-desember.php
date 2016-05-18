<?php

$k121 = ['One Piece Vol. 75','Eiichiro Oda','Elex Media Komputindo','200','2 Desember 2015'];
$k122 = ['Kung Fu Boy Legends Vol. 17','Takeshi Maekawa','Elex Media Komputindo','200','28 Oktober 2015'];
$k123 = ['Blushing Love : SC','Yakko Kaga','Elex Media Komputindo','200','21 Oktober 2015'];
$k124 = ['Godhand Teru Vol. 62','Kazuki Yamamoto','Elex Media Komputindo','200','2 Desember 2015'];
$k125 = ['Kiss to Fast Love : SC','Fujimomo','M&C! Comics','192','11 November 2015'];
$komik12 = [$k121, $k122, $k123, $k124, $k125];

$n121 = ['Hellions of Hallstead Hall : A Lady Never Surrenders (Penakluk Sang Lady)','Sabrina Jeffries','Gramedia Pustaka Utama','488','23 November 2015'];
$n122 = ['Harlequin Koleksi Istimewa : Socialite\'s Gamble - Mempertaruhkan Sang Sosialita','Michelle Conder','Gramedia Pustaka Utama','256','30 November 2015'];
$n123 = ['Meet Lame : I Love You, You Love Her, He Kissed Me','Christian Simamora','Twigora','296','November 2015'];
$n124 = ['Contemporary Romance : The Heir (Sang Pewaris)','Grace Burrowes','Elex Media Komputindo','502','12 Oktober 2015'];
$n125 = ['Metropop: In A Blue Moon','Ilana Tan','Gramedia Pustaka Utama','320','April 2015'];
$nonkomik12 = [$n121, $n122, $n123, $n124, $n125];

?>

<div class="show-all-filter-desember-2015">
    <div class="row">
        <div class="col-md-5 col-md-offset-1"> <!-- DESEMBER TAHUN 2015 - KOMIK -->
            <div class="filter-komik-desember-2015-to-clone__container">
                <div class="filter-komik-desember-2015-to-clone">
                    <div class="best-book-title-komik">
                        Komik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-komik-desember-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $komik12[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom panel-heading-custom-background-'.($i+1).'">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-komik-desember-2015" href="#collapse'.$collapse.'-komik-desember-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/12/k'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$komik12[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-komik-desember-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$komik12[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$komik12[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$komik12[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$komik12[$i][4].'
                          </div>
                        </div>
                      </div>';
                  } ?>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-5"> <!-- desember TAHUN 2015 - NONKOMIK-->
            <div class="filter-nonkomik-desember-2015-to-clone__container">
                <div class="filter-nonkomik-desember-2015-to-clone">
                    <div class="best-book-title-nonkomik">
                        Nonkomik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-non-komik-desember-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $nonkomik12[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom panel-heading-custom-background-'.($i+1).'">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-non-komik-desember-2015" href="#collapse'.$collapse.'-non-komik-desember-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/12/n'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$nonkomik12[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-non-komik-desember-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$nonkomik12[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$nonkomik12[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$nonkomik12[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$nonkomik12[$i][4].'
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
<div class="show-komik-or-nonkomik-filter-desember-2015"> <!-- DESEMBER TAHUN 2015 - HASIL FILTERING -->
    <div class="row">
        <div class="col-md-7 grid-center">
            <div class="clone-filter-result-desember-2015"></div>
        </div>
    </div>
</div>
