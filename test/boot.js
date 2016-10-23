document.write('<ul class="inline-menu nav light bordered tablet-to-list tablet-and-less-hide" id="menu">\
                        <li><a href="/admin/">Dashboard</a></li>\
                        <li><a href="/" target="_blank">View site</a></li>\
                        <li><a href="/admin/modules/">Modules</a></li>\
                        <li class="dropdown"><a href="/admin/">Some other stuff</a>\
                          <ul><li><a href="#modal" data-toggle="modal" id="openmodal">Modal</a></li>\
                            <li><a href="#hidden" data-toggle>More stuff</a></li>\
                            <li><a href="#slide" data-toggle="slide">More stuff</a></li>\
                            <li><a href="#fade" data-toggle="fade">More stuff</a></li>\
                            </ul>\
                        </li>\
                  </ul>\
                  <div class="hidden" id="hidden">hidden</div>\
                  <div class="hidden" id="slide">slide</div>\
                  <div class="hidden" id="fade">faded</div>\
    <div class="modal" id="modal"><span class="close-modal"></span><div class="bg-red" style="height:1500px"></div></div>');
