<?php

$k051 = ['A Secret Marriage: SC','Ando Mai','M&C! Comics','184','8 April 2015'];
$k052 = ['I Will Marry You: SC','Kayoru','M&C! Comics','184','22 April 2015'];
$k053 = ['The Cat\'s Love: SC','Morita Fuji','M&C! Comics','192','22 April 2015'];
$k054 = ['Love Skills: SC','Ayumi Shiina','M&C! Comics','184','8 April 2015'];
$k055 = ['Kiss Me Darling: SC','Satori Tae','M&C! Comics','192','15 April 2015'];
$komik05 = [$k051, $k052, $k053, $k054, $k055];

$n051 = ['Metropop: In A Blue Moon','Ilana Tan','Gramedia Pustaka Utama','320','April 2015'];
$n052 = ['Seri The Motgomerys & Armstrongs : Never Seduce A Scot (Mencuri Hati Sang Laird)','Maya Banks','Gramedia Pustaka Utama','492','26 Maret 2015'];
$n053 = ['Le Marriage: A Wedding After Story','Merry Maeta Sari','Elex Media Komputindo','264','15 Oktober 2015'];
$n054 = ['Historical Romance: And Then He Kissed Her (Kecupan Sang Viscount)','Laura Lee Guhrke','Gramedia Pustaka Utama','424','27 Februari 2007'];
$n055 = ['Harlequin : Night Fever (Pikat Asmara)','Diana Palmer','Gramedia Pustaka Utama','480','April 2015'];
$nonkomik05 = [$n051, $n052, $n053, $n054, $n055];

?>

<div class="show-all-filter-mei-2015">
    <div class="row">
        <div class="col-md-5 col-md-offset-1"> <!-- MEI TAHUN 2015 - KOMIK -->
            <div class="filter-komik-mei-2015-to-clone__container">
                <div class="filter-komik-mei-2015-to-clone">
                    <div class="best-book-title-komik">
                        Komik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-komik-mei-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $komik05[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom panel-heading-custom-background-'.($i+1).'">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-komik-mei-2015" href="#collapse'.$collapse.'-komik-mei-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/5/k'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$komik05[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-komik-mei-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$komik05[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$komik05[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$komik05[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$komik05[$i][4].'
                          </div>
                        </div>
                      </div>';
                  } ?>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-5"> <!-- mei TAHUN 2015 - NONKOMIK-->
            <div class="filter-nonkomik-mei-2015-to-clone__container">
                <div class="filter-nonkomik-mei-2015-to-clone">
                    <div class="best-book-title-nonkomik">
                        Nonkomik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-non-komik-mei-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $nonkomik05[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom panel-heading-custom-background-'.($i+1).'">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-non-komik-mei-2015" href="#collapse'.$collapse.'-non-komik-mei-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/5/n'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$nonkomik05[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-non-komik-mei-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$nonkomik05[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$nonkomik05[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$nonkomik05[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$nonkomik05[$i][4].'
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
<div class="show-komik-or-nonkomik-filter-mei-2015"> <!-- MEI TAHUN 2015 - HASIL FILTERING -->
    <div class="row">
        <div class="col-md-7 grid-center">
            <div class="clone-filter-result-mei-2015"></div>
        </div>
    </div>
</div>
