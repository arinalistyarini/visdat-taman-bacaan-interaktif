<?php

$k101 = ['Knight In The Area, The Vol. 35','Hiroaki Igano','Elex Media Komputindo','192','30 September 2015'];
$k102 = ['Blooming In The Storm: SC','Natsumi Ouchi','M&C! Comics','184','30 September 2015'];
$k103 = ['Vanilla Kiss Vol. 2','Yagami Rina','M&C! Comics','192','7 Oktober 2015'];
$k104 = ['Last Game Vol. 6','Shinobu Amano','M&C! Comics','192','16 September 2015'];
$k105 = ['Godhand Teru Vol. 60','Kazuki Yamamoto','Elex Media Komputindo','192','2 September 2015'];
$komik10 = [$k101, $k102, $k103, $k104, $k105];

$n101 = ['Dilan: Dia Adalah Dilanku Tahun 1990','Pidi Baiq','Pastel Books (Mizan Group)','332','2014'];
$n102 = ['Harlequin Koleksi Istimewa : His Most Exquisite Conquest (Cinta Sehangat Mentari)','Emma Darcy','Gramedia Pustaka Utama','216','21 September 2015'];
$n103 = ['Drunken Monster: Cacatnya Harian Pidi Baiq','Pidi Baiq','Mizan Group','204','8 April 2013'];
$n104 = ['Contemporary Romance : Too Hot To Touch (Recipe for Love)','Louisa Edwards','Elex Media Komputindo','448','30 September 2015'];
$n105 = ['Hellions of Hallstead Hall : A Hellion In Her Bed (Pertaruhan Hati Sang Lord)','Sabrina Jeffries','Gramedia Pustaka Utama','448','14 Agustus 2015'];
$nonkomik10 = [$n101, $n102, $n103, $n104, $n105];

?>

<div class="show-all-filter-oktober-2015">
    <div class="row">
        <div class="col-md-5 col-md-offset-1"> <!-- OKTOBER TAHUN 2015 - KOMIK -->
            <div class="filter-komik-oktober-2015-to-clone__container">
                <div class="filter-komik-oktober-2015-to-clone">
                    <div class="best-book-title-komik">
                        Komik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-komik-oktober-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $komik10[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom" style="background:#eca821">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-komik-oktober-2015" href="#collapse'.$collapse.'-komik-oktober-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/10/k'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$komik10[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-komik-oktober-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$komik10[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$komik10[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$komik10[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$komik10[$i][4].'
                          </div>
                        </div>
                      </div>';
                  } ?>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-5"> <!-- oktober TAHUN 2015 - NONKOMIK-->
            <div class="filter-nonkomik-oktober-2015-to-clone__container">
                <div class="filter-nonkomik-oktober-2015-to-clone">
                    <div class="best-book-title-nonkomik">
                        Nonkomik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-non-komik-oktober-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $nonkomik10[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom" style="background:#eca821">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-non-komik-oktober-2015" href="#collapse'.$collapse.'-non-komik-oktober-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/10/n'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$nonkomik10[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-non-komik-oktober-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$nonkomik10[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$nonkomik10[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$nonkomik10[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$nonkomik10[$i][4].'
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
<div class="show-komik-or-nonkomik-filter-oktober-2015"> <!-- OKTOBER TAHUN 2015 - HASIL FILTERING -->
    <div class="row">
        <div class="col-md-7 grid-center">
            <div class="clone-filter-result-oktober-2015"></div>
        </div>
    </div>
</div>
