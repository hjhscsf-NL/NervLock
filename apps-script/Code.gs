// NervLock 이메일 수집 - Google Apps Script
// 배포 방법: 확장 프로그램 > Apps Script > 배포 > 새 배포 > 웹 앱
// 실행 계정: 나(본인), 액세스 권한: 모든 사용자

var SHEET_NAME = 'NervLock_Subscribers';

function doPost(e) {
  var result = { success: false };

  try {
    var data = JSON.parse(e.postData.contents);
    var email = (data.email || '').trim().toLowerCase();

    if (!isValidEmail(email)) {
      result.error = 'invalid_email';
      return respond(result);
    }

    var sheet = getOrCreateSheet();

    // 중복 체크
    var emails = sheet.getRange(2, 1, Math.max(sheet.getLastRow() - 1, 1), 1).getValues().flat();
    if (emails.indexOf(email) !== -1) {
      result.success = true;
      result.duplicate = true;
      return respond(result);
    }

    var timestamp = Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss');
    var source = (data.source || 'landing_page').toString().substring(0, 100);

    sheet.appendRow([email, timestamp, source]);

    result.success = true;
    result.count = sheet.getLastRow() - 1;
  } catch (err) {
    result.error = err.message;
  }

  return respond(result);
}

function doGet(e) {
  // 신청자 수 조회 (카운터 표시용)
  try {
    var sheet = getOrCreateSheet();
    var count = Math.max(sheet.getLastRow() - 1, 0);
    return respond({ success: true, count: count });
  } catch (err) {
    return respond({ success: false, error: err.message });
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getOrCreateSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['이메일', '신청일시', '소스']);
    sheet.getRange(1, 1, 1, 3).setFontWeight('bold').setBackground('#0d2545').setFontColor('#ffffff');
    sheet.setColumnWidth(1, 260);
    sheet.setColumnWidth(2, 180);
    sheet.setColumnWidth(3, 150);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function respond(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
