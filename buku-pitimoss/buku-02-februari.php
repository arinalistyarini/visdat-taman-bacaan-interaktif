<?php

$k021 = ['Prince of Tennis, The II Vol. 8','Takeshi Konomi','M&C! Comics','176','17 Desember 2014'];
$k022 = ['Fake Lover Vol. 2','Mikase Hayashi','M&C! Comics','192','28 Januari 2015'];
$k023 = ["Hey, I'm Popular Vol. 2",'Junko','M&C! Comics','192','4 Februari 2015'];
$k024 = ['Always On My Mind: SC','Matsu Kana','M&C! Comics','192','21 Januari 2015'];
$k025 = ['Throbbing Spring at A Small Stream: SC','Mio Izumi','M&C! Comics','192','21 Januari 2015'];
$komik02 = [$k021, $k022, $k023, $k024, $k025];

$n021 = ['Historical Romance: And Then He Kissed Her (Kecupan Sang Viscount)','Laura Lee Guhrke','Gramedia Pustaka Utama','424','27 Februari 2007'];
$n022 = ['Koala Kumal','Raditya Dika','GagasMedia','260','17 Januari 2015'];
$n023 = ['Happily Ever After','Winna Efendi','GagasMedia','356','Desember 2014'];
$n024 = ['R.I.S.A.R.A','Sara Wijayanto','Rak Buku','162','Desember 2014'];
$n025 = ['Dilan: Dia Adalah Dilanku Tahun 1990','Pidi Baiq','Pastel Books (Mizan Group)','332','2014'];
$nonkomik02 = [$n021, $n022, $n023, $n024, $n025];

?>

<div class="show-all-filter-februari-2015">
    <div class="row">
        <div class="col-md-5 col-md-offset-1"> <!-- FEBRUARI TAHUN 2015 - KOMIK -->
            <div class="filter-komik-februari-2015-to-clone__container">
                <div class="filter-komik-februari-2015-to-clone">
                    <div class="best-book-title-komik">
                        Komik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-komik-februari-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $komik02[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom" style="background:#eca821">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-komik-februari-2015" href="#collapse'.$collapse.'-komik-februari-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/2/k'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$komik02[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-komik-februari-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$komik02[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$komik02[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$komik02[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$komik02[$i][4].'
                          </div>
                        </div>
                      </div>';
                  } ?>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-5"> <!-- FEBRUARI TAHUN 2015 - NONKOMIK-->
            <div class="filter-nonkomik-februari-2015-to-clone__container">
                <div class="filter-nonkomik-februari-2015-to-clone">
                    <div class="best-book-title-nonkomik">
                        Nonkomik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-non-komik-februari-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $nonkomik02[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom" style="background:#eca821">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-non-komik-februari-2015" href="#collapse'.$collapse.'-non-komik-februari-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/2/n'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$nonkomik02[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-non-komik-februari-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$nonkomik02[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$nonkomik02[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$nonkomik02[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$nonkomik02[$i][4].'
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
<div class="show-komik-or-nonkomik-filter-februari-2015"> <!-- FEBRUARI TAHUN 2015 - HASIL FILTERING -->
    <div class="row">
        <div class="col-md-7 grid-center">
            <div class="clone-filter-result-februari-2015"></div>
        </div>
    </div>
</div>
